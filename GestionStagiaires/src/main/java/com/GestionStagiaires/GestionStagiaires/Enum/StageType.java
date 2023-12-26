package com.GestionStagiaires.GestionStagiaires.Enum;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat (shape = JsonFormat.Shape.STRING)
public enum StageType {
    Affecte,
    NonAffecte ;
}
