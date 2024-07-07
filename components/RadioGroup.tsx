import { Label } from "./ui/label";
import { RadioGroupItem, RadioGroup } from "./ui/radio-group";

export const RadioGroupItems = () => {
  return (
    <RadioGroup defaultValue="male" className="flex gap-5">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="male" id="male" />
        <Label htmlFor="male">Male</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="female" id="female" />
        <Label htmlFor="female">Female</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="fluid" id="fluid" />
        <Label htmlFor="fluid">Fluid</Label>
      </div>
    </RadioGroup>
  );
};
