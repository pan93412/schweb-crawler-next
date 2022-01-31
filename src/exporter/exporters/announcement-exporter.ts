import type { Exporter } from "../../types/exporter-types";
import { ExporterAbstract } from "../exporter.abstract";

export class AnnouncementExporter extends ExporterAbstract implements Exporter {
    export(dataDir: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
