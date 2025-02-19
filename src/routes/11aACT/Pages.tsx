import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CircleIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

export default function ElevenaACT() {
  return (
    <div className="bg-white p-6 max-w-4xl m-auto space-y-8">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="flex-1">
            <div className="mb-6 space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">Segurança</h2>
              <div className="flex items-center justify-between">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="corrosion-factor"
                >
                  Acumulação a compostos tóxicos
                </label>
                <CircleIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Compostos Químicos
                </Label>
                <Select>
                  <SelectTrigger id="residue-set">
                    <SelectValue placeholder="Selecione o composto" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="corrosion-rate"
                >
                  FA
                </label>

                <div className="inline-flex items-center space-x-4">
                  <Select>
                    <SelectTrigger id="residue-set">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">BCF</SelectItem>
                      <SelectItem value="option2">BAF</SelectItem>
                      <SelectItem value="option3">Kow</SelectItem>
                      <SelectItem value="option4">outro</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="corrosion-raapresentate"
                    placeholder="Insira aqui"
                    className="max-w-28"
                    type="number"
                  />
                  <Select>
                    <SelectTrigger id="residue-set">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">g/L</SelectItem>
                      <SelectItem value="option2">mg/L</SelectItem>
                      <SelectItem value="option3">mol/L</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button variant="secondary">?</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="space-y-6 mt-4 flex flex-col justify-end">
              <div className="flex flex-col space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="bibliographic-source"
                >
                  Fonte bibliográfica
                </label>
                <Input
                  id="bibliographic-source"
                  placeholder="Digite a fonte bibliográfica"
                  className="w-56"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/cmh/1"} className="flex justify-end mx-auto max-w-2xl">
        <Button className="bg-green-500 text-white">Proximo</Button>
      </Link>
    </div>
  );
}
