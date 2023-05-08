import { AddToCalendarButton } from "add-to-calendar-button-react";
import { Col, Row } from "react-flexbox-grid";

const AddToCalendar = () => {
  return (
    <Row>
      <Col xs={12}>
        <AddToCalendarButton
          name="Свадьба Ахлюстиных"
          options={["Apple", "Google", "iCal", "Outlook.com", "Microsoft365"]}
          location="Восточная улица, 51, Екатеринбург, Свердловская область, 620100"
          startDate="2023-07-08"
          endDate="2023-07-09"
          startTime="16:00"
          endTime="00:00"
          timeZone="Asia/Yekaterinburg"
          label="Добавить в календарь"
          // buttonStyle="flat"
          // customCss="color: white"
        />
      </Col>
    </Row>
  );
  // const event = {
  //     title: "Свадьба Ахлюстиных",
  //     description: "My Description",
  //     startTime: "2023-07-08T16:00:00+5:00",
  //     endTime: "2023-07-09T00:00:00+5:00",
  //     location: "Восточная, 51",
  //     attendees: [
  //         "Hello World <hello@world.com>",
  //         "Hey <hey@test.com>",
  //     ]
  // }

  // async function handleDownload() {
  //     const filename = 'ExampleEvent.ics'
  //     const file = await new Promise((resolve, reject) => {
  //         createEvent(event, (error, value) => {
  //             if (error) {
  //                 reject(error)
  //             }

  //             resolve(new File([value], filename, { type: 'plain/text' }))
  //         })
  //     })
  //     const url = URL.createObjectURL(file);

  //     // trying to assign the file URL to a window could cause cross-site
  //     // issues so this is a workaround using HTML5
  //     const anchor = document.createElement('a');
  //     anchor.href = url;
  //     anchor.download = filename;

  //     document.body.appendChild(anchor);
  //     anchor.click();
  //     document.body.removeChild(anchor);

  //     URL.revokeObjectURL(url);
  // }

  // return (
  //     <a onClick={this.handleDownload}>
  //         Add to Calendar
  //     </a>
  // )
  // // return <ICalendarLink event={event} isCrappyIE={true}>
  //     // Add to Calendar
  // // </ICalendarLink>
};

export default AddToCalendar;
