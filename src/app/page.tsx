import Botao from "./components/Botao";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Card/>

      <Botao/>
    </div>
  );
}
