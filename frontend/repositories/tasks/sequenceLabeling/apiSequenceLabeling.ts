import { AnnotationRepository } from '@/domain/models/tasks/annotationRepository'
import { Span } from '~/domain/models/tasks/sequenceLabeling'

export class APISequenceLabelingRepository extends AnnotationRepository<Span> {
  constructor() {
    super(Span)
  }

  public async update(projectId: string, docId: number, annotationId: number, labelId: number) {
    const url = this.baseUrl(projectId, docId) + `/${annotationId}`
    const payload = { label: labelId }
    await this.request.patch(url, payload)
  }

  protected baseUrl(projectId: string, docId: number): string {
    return `/projects/${projectId}/examples/${docId}/spans`
  }
}
