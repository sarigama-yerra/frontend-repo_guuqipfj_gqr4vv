import * as Dialog from '@radix-ui/react-dialog'

export default function PreviewModal({ open, onOpenChange, item }) {
  if (!item) return null
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden">
          <div className="aspect-[16/9] w-full bg-gradient-to-br from-pink-100 via-blue-100 to-amber-100" />
          <div className="p-4 flex items-center justify-between">
            <div>
              <Dialog.Title className="font-semibold text-slate-800">{item.title}</Dialog.Title>
              <Dialog.Description className="text-sm text-slate-600">{item.description}</Dialog.Description>
            </div>
            <Dialog.Close className="rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 text-sm font-medium">Close</Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
