import groomIcon from "../assets/images/icons/groom.png"
import brideIcon from "../assets/images/icons/bride.png"

const Contacts = () => {
    let people = [
        { name: "Константин", phone: '79623144626', type: 'groom'},
        { name: "Кристина", phone: '79086336513', type: 'bride' },
    ]

    let telegramLink = (phone) => {
        return <a href={"https://t.me/+" + phone}>
            <img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png"
                alt="Telegram" border="0" width="50" height="50" />
        </a>
    }

    let whatsAppLink = (phone) => {
        return <a href={"https://wa.me/" + phone}>
            <img src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
                alt="WhatsApp" border="0" width="50" height="50" />
        </a>
    }

    return <div>
        <h2>Контакты</h2>
        {
            people.map((person, i) => (
                <div key={i}>
                    <img src={person.type ==='groom' ? groomIcon: brideIcon} width={50} alt=""/>
                    <div>{person.name}</div>
                    <div>+{person.phone}</div>
                    <div>{telegramLink(person.phone)}</div>
                    <div>{whatsAppLink(person.phone)}</div>
                </div>
            )
            )
        }
    </div>
}
export default Contacts;