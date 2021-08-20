import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const QuoteItem = styled.div``;

function Quote({ quote, index }: any) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {(provided: any) => (
        <QuoteItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {quote.content}
        </QuoteItem>
      )}
    </Draggable>
  );
}

const QuoteList = React.memo(function RenderQuoteList({ quotes }: any) {
  return quotes.map((quote: any, index: number) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ));
});

function DraggableContainer({ list }: any) {
  const initial = list.map((component: any, k: number) => {
    const custom: any = {
      id: `id-${k}`,
      content: <div>{component}</div>,
    };

    return custom;
  });

  const [state, setState] = useState({ quotes: initial });

  useEffect(() => {
    setState({
      quotes: list.map((component: any, k: number) => {
        const custom: any = {
          id: `id-${k}`,
          content: <div>{component}</div>,
        };

        return custom;
      }),
    });
  }, [list]);

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    );
    console.log(state);
    setState({ quotes });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided: any) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <QuoteList quotes={state.quotes} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DraggableContainer;
