import React, {PropTypes} from 'react';
import { DragSource } from 'react-dnd';
import ItemType from './Constants'

const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Card{
  render() {
    const { isDragging, connectDragSource, text } = this.props;
    return connectDragSource(
      <div>
        {text}
      </div>
    )
  }
}

export default DragSource(ItemType.CARD, cardSource, collect)(Card)