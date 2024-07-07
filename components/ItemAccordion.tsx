import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ItemAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-medium text-xl">Product Details</AccordionTrigger>
        <AccordionContent>
          A stunning dress that exudes elegance and sophistication, perfect for
          any formal occasion. The intricate design and high-quality fabric
          ensure a comfortable and flattering fit. This dress is sure to make
          you stand out and leave a lasting impression.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-medium text-xl">Product Care & Fit Advice</AccordionTrigger>
        <AccordionContent>
          A stunning dress that exudes elegance and sophistication, perfect for
          any formal occasion. The intricate design and high-quality fabric
          ensure a comfortable and flattering fit. This dress is sure to make
          you stand out and leave a lasting impression.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-medium text-xl">Delivery & Returns</AccordionTrigger>
        <AccordionContent>
          A stunning dress that exudes elegance and sophistication, perfect for
          any formal occasion. The intricate design and high-quality fabric
          ensure a comfortable and flattering fit. This dress is sure to make
          you stand out and leave a lasting impression.{" "}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
