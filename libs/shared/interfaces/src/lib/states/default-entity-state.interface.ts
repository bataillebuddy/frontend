import {EntityState} from "@reduxjs/toolkit";
import {MetaState} from "../states/meta.interface";
import {LoadingStatus} from "../types/loading-status.type";

export interface DefaultEntityState<T> extends EntityState<T> {
  loadingStatus: LoadingStatus
  error: string | null | undefined
  meta: MetaState | null
}