import { AppError } from '@/contexts/ErrorProvider';

interface ApiClientConfig {
  baseURL?: string;
  timeout?: number;
  retryAttempts?: number;
  retryDelay?: number;
  onError?: (error: AppError) => void;
}

interface RequestConfig extends RequestInit {
  timeout?: number;
  retryAttempts?: number;
  skipErrorHandling?: boolean;
}

export class ApiClient {
  private baseURL: string;
  private timeout: number;
  private retryAttempts: number;
  private retryDelay: number;
  private onError?: (error: AppError) => void;

  constructor(config: ApiClientConfig = {}) {
    this.baseURL = config.baseURL || '';
    this.timeout = config.timeout || 10000;
    this.retryAttempts = config.retryAttempts || 3;
    this.retryDelay = config.retryDelay || 1000;
    this.onError = config.onError;
  }

  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private getErrorMessage(status: number): string {
    switch (status) {
      case 400:
        return 'Invalid request. Please check your input.';
      case 401:
        return 'Authentication required. Please log in.';
      case 403:
        return 'Access denied. You don\'t have permission for this action.';
      case 404:
        return 'The requested resource was not found.';
      case 408:
        return 'Request timeout. Please try again.';
      case 429:
        return 'Too many requests. Please wait a moment and try again.';
      case 500:
        return 'Server error. Please try again later.';
      case 502:
        return 'Service temporarily unavailable. Please try again.';
      case 503:
        return 'Service maintenance in progress. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }

  private createError(
    type: AppError['type'],
    message: string,
    userMessage: string,
    details?: any,
    retry?: () => Promise<any>
  ): AppError {
    return {
      id: Math.random().toString(36).substr(2, 9),
      type,
      severity: 'medium',
      message,
      userMessage,
      details,
      timestamp: new Date(),
      retry
    };
  }

  private async fetchWithTimeout(
    url: string,
    options: RequestConfig = {}
  ): Promise<Response> {
    const { timeout = this.timeout, ...fetchOptions } = options;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestConfig = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const { retryAttempts = this.retryAttempts, skipErrorHandling, ...requestOptions } = options;

    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= retryAttempts; attempt++) {
      try {
        const response = await this.fetchWithTimeout(url, requestOptions);

        // Handle HTTP errors
        if (!response.ok) {
          const errorData = await response.text().catch(() => '');
          const userMessage = this.getErrorMessage(response.status);
          
          const error = this.createError(
            'api',
            `HTTP ${response.status}: ${response.statusText}`,
            userMessage,
            { status: response.status, statusText: response.statusText, body: errorData },
            attempt < retryAttempts ? () => this.makeRequest<T>(endpoint, options) : undefined
          );

          if (!skipErrorHandling) {
            this.onError?.(error);
          }

          throw new Error(userMessage);
        }

        // Parse response
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
          return await response.json();
        } else {
          return await response.text() as unknown as T;
        }

      } catch (error) {
        lastError = error as Error;

        // Don't retry for certain errors
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
          // Network error
          const networkError = this.createError(
            'network',
            'Network request failed',
            'Network connection issue. Please check your internet connection and try again.',
            { url, error: error.message },
            () => this.makeRequest<T>(endpoint, options)
          );

          if (!skipErrorHandling) {
            this.onError?.(networkError);
          }
          throw error;
        }

        if (error instanceof DOMException && error.name === 'AbortError') {
          // Timeout error
          const timeoutError = this.createError(
            'network',
            'Request timeout',
            'The request took too long to complete. Please try again.',
            { url, timeout: options.timeout || this.timeout },
            () => this.makeRequest<T>(endpoint, options)
          );

          if (!skipErrorHandling) {
            this.onError?.(timeoutError);
          }
          throw error;
        }

        // Retry logic
        if (attempt < retryAttempts) {
          const delay = this.retryDelay * Math.pow(2, attempt); // Exponential backoff
          await this.delay(delay);
          continue;
        }

        // Final attempt failed
        if (!skipErrorHandling) {
          const finalError = this.createError(
            'api',
            `Request failed after ${retryAttempts + 1} attempts`,
            'The service is currently unavailable. Please try again later.',
            { url, attempts: retryAttempts + 1, lastError: error.message }
          );
          this.onError?.(finalError);
        }

        throw error;
      }
    }

    throw lastError || new Error('Unexpected error in request loop');
  }

  async get<T>(endpoint: string, options?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(endpoint, { ...options, method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any, options?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(endpoint, {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      body: data ? JSON.stringify(data) : undefined
    });
  }

  async put<T>(endpoint: string, data?: any, options?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(endpoint, {
      ...options,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      body: data ? JSON.stringify(data) : undefined
    });
  }

  async delete<T>(endpoint: string, options?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(endpoint, { ...options, method: 'DELETE' });
  }

  async patch<T>(endpoint: string, data?: any, options?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(endpoint, {
      ...options,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      body: data ? JSON.stringify(data) : undefined
    });
  }
}

// Default API client instance
export const apiClient = new ApiClient({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 10000,
  retryAttempts: 3,
  retryDelay: 1000
});