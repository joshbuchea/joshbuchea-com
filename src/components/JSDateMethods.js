import React, { useEffect, useState } from 'react'

// TODO:
// - [x] Finish UTC example
// - [x] show new Date()
// - [x] refresh every N seconds/minutes
// - [x] enable refresh every N seconds/minutes?

// const DATE_STRING = '2017-01-01';
// const REFRESH_INTERVAL = 1/2 * 60 * 1000; // 2x per minute
// const REFRESH_DELAY = 50;

const dateMethods = [
  {
    method: 'now.toDateString()',
    getValue: date => date.toDateString(),
    desc: 'Converts the date portion of a Date object into a readable string',
  },
  {
    method: 'now.toISOString()',
    getValue: date => date.toISOString(),
    desc: 'Returns the date as a string, using the ISO standard',
  },
  {
    method: 'now.toJSON()',
    getValue: date => date.toJSON(),
    desc: 'Returns the date as a string, formatted as a JSON date',
  },
  {
    method: 'now.toLocaleDateString()',
    getValue: date => date.toLocaleDateString(),
    desc: 'Returns the date portion of a Date object as a string, using locale conventions',
  },
  {
    method: 'now.toLocaleTimeString()',
    getValue: date => date.toLocaleTimeString(),
    desc: 'Returns the time portion of a Date object as a string, using locale conventions',
  },
  {
    method: 'now.toLocaleString()',
    getValue: date => date.toLocaleString(),
    desc: 'Converts a Date object to a string, using locale conventions',
  },
  {
    method: 'now.toString()',
    getValue: date => date.toString(),
    desc: 'Converts a Date object to a string',
  },
  {
    method: 'now.toTimeString()',
    getValue: date => date.toTimeString(),
    desc: 'Converts the time portion of a Date object to a string',
  },
  {
    method: 'now.toUTCString()',
    getValue: date => date.toUTCString(),
    desc: 'Converts a Date object to a string, according to universal time',
  },
  {
    method: 'now.getDate()',
    getValue: date => date.getDate(),
    desc: 'Returns the day of the month (from 1-31)',
  },
  {
    method: 'now.getDay()',
    getValue: date => date.getDay(),
    desc: 'Returns the day of the week (from 0-6)',
  },
  {
    method: 'now.getFullYear()',
    getValue: date => date.getFullYear(),
    desc: 'Returns the year',
  },
  {
    method: 'now.getHours()',
    getValue: date => date.getHours(),
    desc: 'Returns the hour (from 0-23)',
  },
  {
    method: 'now.getMilliseconds()',
    getValue: date => date.getMilliseconds(),
    desc: 'Returns the milliseconds (from 0-999)',
  },
  {
    method: 'now.getMinutes()',
    getValue: date => date.getMinutes(),
    desc: 'Returns the minutes (from 0-59)',
  },
  {
    method: 'now.getMonth()',
    getValue: date => date.getMonth(),
    desc: 'Returns the month (from 0-11)',
  },
  {
    method: 'now.getSeconds()',
    getValue: date => date.getSeconds(),
    desc: 'Returns the seconds (from 0-59)',
  },
  {
    method: 'now.getTime()',
    getValue: date => date.getTime(),
    desc: 'Returns the number of milliseconds since midnight Jan 1 1970, and a specified date',
  },
  {
    method: 'now.getTimezoneOffset()',
    getValue: date => date.getTimezoneOffset(),
    desc: 'Returns the time difference between UTC time and local time, in minutes',
  },
  {
    method: 'now.getUTCDate()',
    getValue: date => date.getUTCDate(),
    desc: 'Returns the day of the month, according to universal time (from 1-31)',
  },
  {
    method: 'now.getUTCDay()',
    getValue: date => date.getUTCDay(),
    desc: 'Returns the day of the week, according to universal time (from 0-6)',
  },
  {
    method: 'now.getUTCFullYear()',
    getValue: date => date.getUTCFullYear(),
    desc: 'Returns the year, according to universal time',
  },
  {
    method: 'now.getUTCHours()',
    getValue: date => date.getUTCHours(),
    desc: 'Returns the hour, according to universal time (from 0-23)',
  },
  {
    method: 'now.getUTCMilliseconds()',
    getValue: date => date.getUTCMilliseconds(),
    desc: 'Returns the milliseconds, according to universal time (from 0-999)',
  },
  {
    method: 'now.getUTCMinutes()',
    getValue: date => date.getUTCMinutes(),
    desc: 'Returns the minutes, according to universal time (from 0-59)',
  },
  {
    method: 'now.getUTCSeconds()',
    getValue: date => date.getUTCSeconds(),
    desc: 'Returns the seconds, according to universal time (from 0-59)',
  },
  {
    method: 'now.valueOf()',
    getValue: date => date.valueOf(),
    desc: 'Returns the primitive value of a Date object',
  },
  {
    method: 'Date.now()',
    getValue: date => Date.now(),
    desc: 'Returns the number of milliseconds since midnight Jan 1, 1970',
  },
  {
    method: date => `Date.parse('${date.toDateString()}')`,
    getValue: date => Date.parse(date.toDateString()),
    desc: 'Parses a date string and returns the number of milliseconds since January 1, 1970',
  },
  {
    method: date => `Date.UTC(
      ${date.getFullYear()},
      ${date.getMonth()},
      ${date.getDay()},
      ${date.getHours()},
      ${date.getMinutes()},
      ${date.getSeconds()},
      ${date.getMilliseconds()},
    `,
    getValue: date => Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDay(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    ),
    // desc: 'Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC',
    desc: 'Accepts the same parameters as the Date constructor, but treats them as UTC. Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.',
  },
];

const JSDateMethods = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // refresh component *once* after load to refresh Date value, otherwise
    // examples display date from whenever Gatsby last built the site
    setNow(new Date());
  }, []);

  return (
    <>
      {/* <h1>JavaScript Date</h1> */}
      <p>const now = new Date();</p>
      <h3>Methods</h3>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {dateMethods.map((dateMethod, index) => (
            <tr key={index}>
              <td>
                {typeof dateMethod.method === 'function'
                  ? dateMethod.method(now)
                  : dateMethod.method
                }
              </td>
              <td>{dateMethod.getValue(now)}</td>
              <td>{dateMethod.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

// class JSDateMethods extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       now: new Date(),
//     };
//   }
  
//   componentDidMount() {
//     // this.refreshInterval = setInterval(
//     //   () => this.setState({ now: new Date() }),
//     //   REFRESH_INTERVAL
//     // );

//     // refresh component *once* after load to refresh Date value, otherwise
//     // examples contain date from whenever Gatsby last built the site
//     setTimeout(() => {
//       this.setState({ now: new Date() });
//     }, REFRESH_DELAY);
//   }
  
//   componentWillUnmount() {
//     // clearInterval(this.refreshInterval);
//   }

//   render() {
//     // const { now } = this.state;

//     return (
//       <>
//         {/* <h1>JavaScript Date</h1> */}
//         <p>const now = new Date();</p>
//         <h3>Methods</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Method</th>
//               <th>Value</th>
//               <th>Description</th>
//             </tr>
//           </thead>
//           <tbody>
//             {dateMethods.map((dateMethod, index) => (
//               <tr key={index}>
//                 <td>
//                   {typeof dateMethod.method === 'function'
//                     ? dateMethod.method(this.state.now)
//                     : dateMethod.method
//                   }
//                 </td>
//                 <td>{dateMethod.getValue(this.state.now)}</td>
//                 <td>{dateMethod.desc}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </>
//     )
//   }
// }

export default JSDateMethods
