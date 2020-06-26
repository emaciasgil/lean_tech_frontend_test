export interface ShipmentInterface {
    carrier?:         Carrier;
    carrierRate?:     CarrierRate[];
    companyName?:     WelcomeCompanyName;
    createdBy?:       CreatedBy;
    createdDate?:     string;
    customerRate?:    CustomerRate[];
    customerStatus?:  string;
    destination?:     Destination;
    origin?:          Destination;
    rateType?:        RateType;
    references?:      Reference[];
    scac?:            Scac;
    serviceDays?:     string;
    serviceType?:     ServiceType;
    shipmentId?:      number | string;
    shipper?:         Shipper;
    trackingDetails?: TrackingDetail[];
    uplift?:          Uplift;
}

export interface Carrier {
    logoUrl?: string;
    name?:    CarrierName;
}

export enum CarrierName {
    FedEx = "FedEx",
}

export interface CarrierRate {
    charge?: number | string;
    name?:   CarrierRateName;
}

export enum CarrierRateName {
    FuelCharge = "Fuel Charge",
    TotalLineHaul = "Total Line Haul",
}

export enum WelcomeCompanyName {
    LeanTech = "Lean Tech",
    LeanTechBarranquilla = "Lean Tech Barranquilla",
    LeanTechMedellin = "Lean Tech Medellin",
}

export enum CreatedBy {
    AdminLeanTechIo = "admin@lean-tech.io",
}

export interface CustomerRate {
    charge?: null | string;
    name?:   CarrierRateName;
}

export interface Destination {
    city?:  string;
    state?: string;
}

export enum RateType {
    LTL = "LTL",
}

export interface Reference {
    name?:  ReferenceName;
    value?: string;
}

export enum ReferenceName {
    InvoiceNumber = "Invoice Number",
    PONumber = "PO Number",
}

export enum Scac {
    Fxdx = "FXDX",
}

export enum ServiceType {
    Standard = "Standard",
}

export interface Shipper {
    address?:     Address;
    city?:        City;
    companyName?: ShipperCompanyName;
    country?:     Country;
    state?:       State;
    zipCode?:     string;
}

export enum Address {
    The21095SouthFrontLaneAV = "21095 South Front Lane Av",
}

export enum City {
    Doral = "Doral",
}

export enum ShipperCompanyName {
    LeanTransportation = "Lean Transportation",
}

export enum Country {
    Usa = "USA",
}

export enum State {
    FL = "FL",
}

export interface TrackingDetail {
    location?: string;
    status?:   Status;
}

export enum Status {
    Delivered = "Delivered",
    InTransit = "In Transit",
}

export interface Uplift {
    unit?:  Unit;
    value?: number | string;
}

export enum Unit {
    Percent = "percent",
}
