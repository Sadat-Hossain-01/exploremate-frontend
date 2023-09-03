import { writable } from "svelte/store";
import type { Plan } from "../interfaces/plan";


const plan_store = writable<Plan>({
    city: "Sylhet",
    start_date: "",
    duration: 0,
    destinations: [],
    events: [],
});

export default plan_store;