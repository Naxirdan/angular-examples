import { Pipe, PipeTransform } from '@angular/core';
import { SuportedMime } from '../enum/soported-mime.enum';

@Pipe({
  name: 'extensionfile'
})
export class ExtensionfilePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    switch(value)
    {
      case SuportedMime.DOCX:
        return 'DOCX';
      case SuportedMime.JPEG:
        return 'JPEG';
      case SuportedMime.JPG:
        return 'JPG';
      case SuportedMime.ODG:
        return 'ODG';
      case SuportedMime.ODP:
        return 'ODP';
      case SuportedMime.ODS:
        return 'ODS';
      case SuportedMime.ODT:
        return 'ODT';
      case SuportedMime.PDF:
        return 'PDF';
      case SuportedMime.PNG:
        return 'PNG';
      case SuportedMime.PPTX:
        return 'PPTX';
      case SuportedMime.RTF:
        return 'RTF';
      case SuportedMime.SVG:
        return 'SVG';
      case SuportedMime.TIFF:
        return 'TIFF';
      case SuportedMime.TXT:
        return 'TXT';
      case SuportedMime.XLSX:
        return 'XLSX';
      case SuportedMime.XML:
        return 'XML';
      case SuportedMime.XSIG:
        return 'XSIG';
      default:
        return null
    }
  }

}
