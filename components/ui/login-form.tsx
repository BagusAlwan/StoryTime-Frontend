import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    const router = useRouter();

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push("/homepage");
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="p-8 w-full max-w-lg">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                </CardHeader>
                <div className="mt-2" />
                <CardContent>
                    <form className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                                    Forgot your password?
                                </a>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button onClick={handleLogin} type="button" className="w-full">
                            Login
                        </Button>
                        <Button onClick={handleLogin} type="button" variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
