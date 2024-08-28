import { HttpParams } from "@angular/common/http";
import { PaginatedResult } from "../_models/pagination";
import { signal } from "@angular/core";

// CANCELLLLLL
export function getPaginatedResult<T>(url: string, params: HttpParams, paginatedResultSignal: ReturnType<typeof signal<PaginatedResult<T> | null>>) {
    paginatedResultSignal.set({
        result: response.body as T,
        pagination: JSON.parse(response.headers.get('Pagination')!)
    })

  }

  export function getPaginationHeaders(pageNumber: number, pageSize: number) {
    let params = new HttpParams();

      params = params.append('pageNumber', pageNumber);
      params = params.append('pageSize', pageSize);
  
    return params;
  }