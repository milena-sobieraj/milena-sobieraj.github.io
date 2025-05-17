import {Card} from "@/components/card/card.component";
import {Button} from "@/components/button/button.component";
import {TagList} from "@/components/tags/tags.component";
import {ImageBlock} from "@/components/image-block/image-block.component";

export default function Home() {
  return (
    <div className={'container px-40'}>
      <Card title={"cześć, poznajmy się"}>
        <div className="flex gap-4 flex-col">
          <p>Mam na imię Milena i od 4 lat tworzę projekty, które opowiadają historie i przyciągają uwagę. Specjalizuję się w projektach dla social mediów, stron internetowych i kampanii reklamowych. Łączę estetykę z funkcjonalnością, by realizacje były zarówno przyjemne dla oka, jak i skuteczne.</p>
          <p>Poniżej możesz zobaczyć próbkę mojej codziennej pracy. Jeśli masz jakieś pytania, chcesz dowiedzieć się więcej - napisz!</p>
          <br/>
          <div className="flex flex-row justify-between items-center">
            <Button title={'portfolio'} variant="full"/>
            <Button title={'wiecej o mnie'} variant="secondary"/>
          </div>
        </div>
      </Card>
      <Card title={"social media i reklamy"} variant={"transparent"}>
        <div className="flex gap-4 flex-col">
          <p>Tworzę projekty, które ożywają marki w internecie - dbam o spójną komunikację w social mediach, reklamach i materiałach video. Staram się, by każda realizacja była nie tylko estetyczna, ale również angażująca i dopasowana do potrzeb odbiorców i oczekiwań klientów.</p>
        </div>
        <br/>
        <Button title={'zobacz więcej projektów'} variant="full" className={'w-full'}/>
      </Card>
      <Card title={"ui / ux design"}>
        <div className="flex gap-4 flex-col">
          <p>Projektuję różne strony internetowe - od prostych wizytówek do tych rozbudowanych, zawierających bardziej skomplikowane funkcjonalności. Łączę wymagania i specyfikę klientów z estetyką i funkcjonalnością tak, by ich strony przyciągały uwagę i spełniały założone cele. Każdy projekt dostosowuję do indywidualnych potrzeb klienta.</p>
          <p>Kliknij w interesujący Cię projekt, żeby dowiedzieć się trochę więcej o procesie jego tworzenia, lub wejdź w bezpośredni link pod spodem, by zobaczyć efekt końcowy.</p>
        </div>
        <br/>
      </Card>
      <TagList tags={["figma", "dupa"]}/>
      <ImageBlock src={"/janik.svg"} alt={"test"} title={"doradztwo kredytowe"} width={280} height={60}/>
    </div>
  );
}
