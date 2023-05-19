import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { CgGym } from "react-icons/cg";


const VerticalComponent = () => {
    return (

        <VerticalTimeline animate={true} layout={"2-columns"} lineColor='red'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    borderBottom: "2px solid yellow",
                    boxShadow:"none"
                }}
                icon={<CgGym size="20px" />}
                iconStyle={{ background: '#fff', color: 'red' }}

            >
                <div>
                    <h1 className='quote'>PUSH THROUGH THE PAIN</h1>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    borderBottom: "2px solid yellow",
                    boxShadow:"none"
                }}
                icon={<CgGym size="20px" />}
                iconStyle={{ background: '#fff', color: 'red' }}
            >
                <div>
                   <h1 className="quote">WORK SWEAT ACHIEVE</h1>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    borderBottom: "2px solid yellow",
                    boxShadow:"none"
                }}
                icon={<CgGym size="20px" />}
                iconStyle={{ background: '#fff', color: 'red' }}
            >
                <div>
                    <h1 className="quote">NO MORE EXCUSES</h1>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    borderBottom: "2px solid yellow",
                    boxShadow:"none"
                }}
                icon={<CgGym size="20px" />}
                iconStyle={{ background: '#fff', color: 'red' }}
            >
                <div>
                    <h1 className="quote">NO PAIN NO GAIN</h1>
                </div>
            </VerticalTimelineElement>
        </VerticalTimeline>

    )
}

export default VerticalComponent
