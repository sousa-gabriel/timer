import { useContext } from "react";
import { CyclesContext } from "../../context/CyclesContext";
import {
  Actions,
  ButtonAction,
  HistoryContainer,
  HistoryList,
  Status,
} from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { ArrowsCounterClockwise, Trash } from "phosphor-react";

export function History() {
  const { cycles, removeCycleFromHistory, repeatCycleFromHistory } =
    useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Duração</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr>
                <td>{cycle.task}</td>
                <td>{`${cycle.minutesAmount} minutos`}</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <Status statusColor="green">Concluído</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status statusColor="red">Interrompido</Status>
                  )}
                  {!cycle.interruptedDate && !cycle.finishedDate && (
                    <Status statusColor="yellow">Em andamento</Status>
                  )}
                </td>
                <td>
                  <Actions>
                    <ButtonAction
                      action="trash"
                      onClick={() => removeCycleFromHistory(cycle.id)}
                    >
                      <Trash size={24} />
                    </ButtonAction>
                    {(cycle.interruptedDate || cycle.finishedDate) && (
                      <ButtonAction
                        action="repeat"
                        onClick={() => repeatCycleFromHistory(cycle.id)}
                      >
                        <ArrowsCounterClockwise size={24} />
                      </ButtonAction>
                    )}
                  </Actions>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
