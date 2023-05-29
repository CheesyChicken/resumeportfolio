import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date= '2014'
        iconStyle = {{background: '#3e497a', color:'#fff'}}
        icon={<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
            NET-WELL Institute of Computer Education
          </h3>
          <p>
            Diploma
          </p>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date= '2018 - 2022'
        iconStyle = {{background: '#3e497a', color:'#fff'}}
        icon={<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Vishwakarma Institute of Information technology, Pune, Maharashtra
          </h3>
          <p>
            Undergraduation
          </p>
        
        </VerticalTimelineElement>
    
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date= '2022'
        iconStyle = {{background: '#e9d35b', color:'#fff'}}
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Photon Legal
          </h3>
          <p>
            Engineering Intern
          </p>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date= 'Current'
        iconStyle = {{background: '#e9d35b', color:'#fff'}}
        icon={<WorkIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Larsen and Toubro Infotech
          </h3>
          <p>
            FTE, Full Stack Web-Developer
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;