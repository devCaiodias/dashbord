import { BadgeDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Ultimos clientes
                    </CardTitle>
                    <BadgeDollarSign className="ml-auto w-4 h4" />
                </div>
                <CardDescription>
                    Novos Clientes nas ultimas 24h
                </CardDescription>
            </CardHeader>
            
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/91338704?s=400&u=6b967f161350db0d602f325c236adcaf380d9a01&v=4" />
                        <AvatarFallback>Dev</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Programador</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">Test@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/91338704?s=400&u=6b967f161350db0d602f325c236adcaf380d9a01&v=4" />
                        <AvatarFallback>Dev</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Programador</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">Test@gmail.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}