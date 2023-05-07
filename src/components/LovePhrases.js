const LovePhrases = () => {
    const phrases = [
        "Вместе навсегда",
        "Я тебя люблю",
        "Нет ничего важнее, чем ты",
        "Ты - мое все",
        "Обожаю твою улыбку",
        "Моя жизнь - это ты",
        "И в горе и в радости",
    ]
    return <div style={{
        display: "flex",
        position: "sticky",
        listStyle: "inside",
        color: "balck",
        borderTop: "3px solid black",
        borderBottom: "3px solid black",
        padding: "10px",
        whiteSpace: "nowrap",
        overflow: "hidden",
    }} >
        {phrases.map((phrase, index) => (
            <div key={index} style={{ 
                margin: "0px 10px", 
                winth: "auto",
                // display: "inline-block", 
            }}>♥ {phrase}</div>
        ))}
    </div>
}
export default LovePhrases;