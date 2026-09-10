import { Recycle } from 'lucide-react'

export function TeacherV2Logo({
  size = 44,
  withWordmark = false,
}: {
  size?: number
  withWordmark?: boolean
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <Recycle style={{ width: size * 0.55, height: size * 0.55 }} strokeWidth={2.4} />
      </div>
      {withWordmark && (
        <span className="font-heading text-xl font-bold tracking-tight text-foreground">
          Teacher
          <span className="text-primary">V2</span>
        </span>
      )}
    </div>
  )
}
