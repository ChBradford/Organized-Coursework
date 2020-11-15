import { LevelSet } from './levelSet';
import { VariableSet } from './variableSet';
import { GridSet } from './gridSet';
import { TimeSet } from './timeSet';

export class OutputSet {
    setName: string;
    recordType: string;
    levelSet: LevelSet;
    variableSet: VariableSet;
    gridSet: GridSet;
    timeSet: TimeSet;
}