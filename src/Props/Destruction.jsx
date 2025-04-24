const Destruction = (props) =>{
    const {Brand,Model,Price,Range} = props.car
    console.log(props)

    return(
        <section>
            <div>{Brand}</div>
            <div>{Model}</div>
            <div>{Price}</div>
            <div>{Range}</div>
        </section>
    )
}

export default Destruction;