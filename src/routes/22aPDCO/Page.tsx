import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export default function TwentyTwoaPDCO() {
  return (
    <div className="bg-white p-6 max-w-4xl m-auto h-screen space-y-8">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="flex-1">
            <div className="mb-6 space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">
                Potencial de danos a camada de ozônio
              </h2>
              <div className="flex items-center justify-between">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="corrosion-factor"
                >
                  (por breve descrição de tiver)
                </label>
                <CircleIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Composto Químico
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
                  Massa de CFC-11 equivalente :
                </label>
                <div className="inline-flex items-center space-x-4">
                  <Input placeholder="Massa equivalente" />
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button variant="secondary">?</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-end">
            <div className="flex flex-col space-y-2 w-full">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="bibliographic-source"
              >
                Fonte bibliográfica
              </label>
              <Input
                id="bibliographic-source"
                placeholder="Digite a fonte bibliográfica"
              />
            </div>
          </div>
        </div>
      </div>
      <Link to={"/oldp/2"} className="flex justify-end max-w-4xl mr-8">
        <Button className="bg-green-500 text-white">Proximo</Button>
      </Link>
    </div>
  );
}

function ArrowLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{""}</title>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function CircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{""}</title>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
