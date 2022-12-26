"use client";
import TimeAgo from "react-timeago"
type Props = {
    time : string
}

export default function LiveStamp({time}: Props) {
  return (
    <TimeAgo date={time}/>
  )
}