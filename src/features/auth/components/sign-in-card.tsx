import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'

export const SignInCard = () => {
  return (
    <Card className='w-full h-full p-8'>
      <CardHeader className="px-0 pt-0">
        Login to continue
      </CardHeader>
      <CardDescription>
        Use your email or another service to login
      </CardDescription>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">

        </form>
      </CardContent>
      Sign In Card
    </Card>
  )
}
