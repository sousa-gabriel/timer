import { FormContainer, TaskInput, MinutesAmountInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../context/CyclesContext";

export function NewCycleForm() {
  const { activeCycle, cycles } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="tasks"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="tasks">
        {cycles.map((cycle) => (
          <option value={cycle.task} />
        ))}
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
