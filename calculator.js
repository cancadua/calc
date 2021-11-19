return (
    <View style={styles.container}>
        <View>
            <Text>HELLO</Text>
        </View>
        <View>
            {
                buttons.map((row, index) => {
                    return(
                        <View style={styles.row} key={index}>
                            {
                                row.map(({title, onPress}, index) => {
                                    return <Button key={index} onPress={button.onPress} title={button.title}/>
                                )})
                            }
                        </View>
                    )
                })}
        </View>
    </View>
);