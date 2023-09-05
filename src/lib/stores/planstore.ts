import { writable } from "svelte/store";
import type { Plan } from "../interfaces/plan";


const plan_store = writable<Plan>({
    start_date: "",
    duration: 0,
    cities: [],
    destinations: [],
    events: [],
    activities: [],
    choice_level: 0,
    traveler_count: 0,
});

export default plan_store;