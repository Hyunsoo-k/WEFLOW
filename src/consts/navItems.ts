import { GrServices } from "react-icons/gr";
import { FiTool } from "react-icons/fi";
import { SlDocs } from "react-icons/sl";
import { IoCalendarClearOutline } from "react-icons/io5";

export const NAV_ITEMS = [
  { name: '서비스', url: '/service', icon: GrServices },
  { name: '제작 플랜 & 가격 안내', url: '/pricing', icon: FiTool },
  { name: '성공 사례', url: '/cases', icon: SlDocs },
  { name: '예약', url: '/reservation', icon: IoCalendarClearOutline }
];