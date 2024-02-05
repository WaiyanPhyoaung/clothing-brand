import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ProducDetailsAccordian() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quae delectus doloremque ab illum
          fugiat voluptas, corporis voluptatibus? Temporibus amet veniam quaerat
          dolores a assumenda alias, maxime porro quae quidem cumque?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Saepe, magnam blanditiis dolores praesentium debitis
          obcaecati aliquid, possimus hic vitae consectetur molestiae incidunt
          qui earum? Veritatis sed nihil in dolorum eaque?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Magnam, quisquam quos nemo perferendis quae debitis officiis velit
          veritatis! Esse modi iure sint aut atque sit ea perferendis voluptate
          a cumque.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ProducDetailsAccordian;
