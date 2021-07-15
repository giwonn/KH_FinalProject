let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    calendar_id: createEventId(),
    title: "하...",
    content: "ㅎㅎㅎㅎㅎㅎ",
    start: todayStr,
  },
  {
    calendar_id: createEventId(),
    title: "실화냐",
    content: "ㅁㅁㅁㅁㅁㅁ",
    start: todayStr + "T12:00",
  },
  {
    calendar_id: createEventId(),
    title: "test",
    content: "ㅋㅋㅋㅋㅋㅋ",
    start: "2021-06-23T12:00",
    end: "2021-06-25T12:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
