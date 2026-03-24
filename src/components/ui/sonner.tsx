import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-[#020817] group-[.toaster]:border-[#E2E8F0] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#374151]",
          actionButton:
            "group-[.toast]:bg-[#0A2E76] group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-[#F1F5F9] group-[.toast]:text-[#374151]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
