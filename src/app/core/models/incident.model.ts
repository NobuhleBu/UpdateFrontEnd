import { User } from './user.model';

export enum Incident_Status {
    Open = 0,
    Accepted = 1,
    Rejected = 2,
    Escalated = 3,
    Closed = 4
}

export interface IncidentStatus {
    status_ID: number;
    status_Description: string;
}

export interface Incident {
    incident_ID: number;
    incident_Location: string;
    incident_Description: string;
    incident_Date_Logged: Date;
    incident_Status_ID: number;
    incidentStatus: IncidentStatus;
    incident_User_ID: number;
    incident_User: User;
    incident_Technician_ID: number;
    incident_Technician: User;
}
