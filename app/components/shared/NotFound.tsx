import { Home } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import FuzzyText from '~/components/react-bits/FuzzyText'
import { Button } from '~/components/ui/button'

interface NotFoundProps {
  message: string
  details: string
  stack?: string
}

export default function NotFound({ message, details, stack }: NotFoundProps) {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-col items-center justify-center"
      >
        <div className="mb-5">
          <FuzzyText
            baseIntensity={0.3}
            // hoverIntensity={hoverIntensity}
            // enableHover={enableHover}
            color="#ee9a00ff"
          >
            {message}
          </FuzzyText>
        </div>

        <p className="text-muted-foreground mb-8 max-w-md text-lg">{details}</p>

        {stack && (
          <pre className="w-full overflow-x-auto p-4">
            <code>{stack}</code>
          </pre>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:gap-3"
      >
        <Button asChild size="lg">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
