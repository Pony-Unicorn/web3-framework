export function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="text-muted-foreground container mx-auto px-4 py-6 text-center text-sm sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Bolt. All rights reserved.
      </div>
    </footer>
  )
}
