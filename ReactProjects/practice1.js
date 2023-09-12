class Quotes extends React.Component {
  render() {
    return (
      <div>
        "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. - By: Maurice Switzer, Mrs. Goose, Her Book";
      </div>
    )
  }
}

ReactDOM.render(
  <Quotes />,
  document.getElementById('quote-box')
)