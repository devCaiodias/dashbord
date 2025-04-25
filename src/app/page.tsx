import ChartOverview from "@/components/chart";
import Sales from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-900 select-none">
                Total de Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-5" />
            </div>

            <CardDescription >
              Total de vendas em 90 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">$ 400.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-900 select-none">
                Novos clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-5" />
            </div>

            <CardDescription >
              Novos clientes em 90 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">2367</p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-900 select-none">
                Pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-5" />
            </div>

            <CardDescription >
              Total de pedidos hoje
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">800</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-900 select-none">
                Total pedidos
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h-5" />
            </div>

            <CardDescription >
              Total pedidos em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">2000</p>
          </CardContent>
        </Card>
      </section>
      
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}
