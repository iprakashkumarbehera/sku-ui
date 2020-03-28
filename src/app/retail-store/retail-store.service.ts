import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as constants from '.././constants';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RetailerStoreService {
    Url1: any;
    tempLocationName: any;

    constructor(private http: HttpClient) { }

    private getAllDetailsAPI = constants.REST_API_URL + '/api/v1/getSkuDetails'
    private getAllLocationAPI = constants.REST_API_URL + '/api/v1/location'
    private getDeleteDetailsAPI = constants.REST_API_URL + '/api/v1/deleteSkuDetails/@id@'
    private getDetailsByIdAPI = constants.REST_API_URL + '/api/v1/getSkuDetailsById/@id@'
    private updateSkuDetailsAPI = constants.REST_API_URL + '/api/v1/addOrUpdateSkuDetails'
    private getDepartmentAPI = constants.REST_API_URL + '/api/v1/location/@location_id@department'
    private getCategoryAPI = constants.REST_API_URL;
    getRetailById(id: any) {
        return this.http.post(this.getDetailsByIdAPI.replace('@id@', id + "/"), httpOptions);
    }
    saveRetail(data: any) {
        return this.http.post(this.updateSkuDetailsAPI, data, httpOptions);
    }
    deleteRetail(id: any) {
        return this.http.delete(this.getDeleteDetailsAPI.replace('@id@', id + "/"), httpOptions);
    }

    getAllRetailDetails(location: any, department: any, category: any, subCategory: any) {
        var request = {
            'location': location,
            'department': department,
            'category': category,
            'subCategory': subCategory
        };

        //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa("retailer" + ':' + "retailer123") });
        //return this.http.post(this.getAllDetailsAPI, request, {headers});
        return this.http.post(this.getAllDetailsAPI, request, httpOptions);
    }
    getAllLocationDetails() {
        return this.http.get(this.getAllLocationAPI, httpOptions);
    }

    getDepartment(location_id: any) {
        console.log(this.getDepartmentAPI.replace('@location_id@', location_id + "/"));
        debugger
        return this.http.post(this.getDepartmentAPI.replace('@location_id@', location_id + "/"), httpOptions);
    }

    getCategory(location: any, department_id: any) {
        return this.http.post(this.getCategoryAPI + "/api/v1/" + 'location' + "/" + location + "/" + 'department' + "/" + department_id + "/" + 'category', httpOptions)

    }


    getsubCategory(location: any, department_id: any, category: any) {
        return this.http.post(this.getCategoryAPI + "/api/v1/" + 'location' + "/" + location + "/" + 'department' + "/" + department_id + "/category/" + category + "/subcategory", httpOptions)

    }

}
