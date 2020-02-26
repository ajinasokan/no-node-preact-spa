class Hello extends preact.Component {
    render (props) {
        return (
            <span>Hello {props.name || "world"}!</span>
        )
    }
}