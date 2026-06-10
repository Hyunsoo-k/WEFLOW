import { GrServices } from "react-icons/gr";
import { FiTool } from "react-icons/fi";
import { SlDocs } from "react-icons/sl";
import { IoCalendarClearOutline } from "react-icons/io5";

export const NAV_ITEMS = [
  { name: '서비스', url: '/service', icon: GrServices },
  { name: '가격', url: '/pricing', icon: FiTool },
  { name: '사례', url: '/cases', icon: SlDocs },
  { name: 'FAQ', url: '/faq', icon: IoCalendarClearOutline }
];