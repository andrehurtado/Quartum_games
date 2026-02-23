import { Gamepad2 } from 'lucide-react'
import { useVisible } from '@/hooks/useVisible'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'

const CATEGORY_KEYS = [
  { nameKey: 'catReaction', descKey: 'catReactionDesc' },
  { nameKey: 'catCoordination', descKey: 'catCoordinationDesc' },
  { nameKey: 'catPuzzles', descKey: 'catPuzzlesDesc' },
  { nameKey: 'catFamily', descKey: 'catFamilyDesc' },
  { nameKey: 'catShort', descKey: 'catShortDesc' },
] as const

const GAME_KEYS = [
  { titleKey: 'gameReflex', categoryKey: 'catReaction' },
  { titleKey: 'gameBalance', categoryKey: 'catCoordination' },
  { titleKey: 'gamePuzzle', categoryKey: 'catPuzzles' },
  { titleKey: 'gameFamily', categoryKey: 'catFamily' },
  { titleKey: 'gameQuick', categoryKey: 'catShort' },
  { titleKey: 'gameTiming', categoryKey: 'catReaction' },
] as const

export function GameCatalog() {
  const { ref, visible } = useVisible()
  const { t } = useLocale()

  return (
    <section
      id="catalog"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'}`}
      style={{ backgroundColor: 'var(--bg-elevated)', transitionDuration: '400ms', transitionTimingFunction: 'var(--ease-smooth)' }}
    >
      <Container>
        <SectionHeading
          title={t('catalogTitle')}
          subtitle={t('catalogSubtitle')}
        />
        <div className="mt-8">
          <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-soft)' }}>{t('categories')}</p>
          <ul className="flex flex-wrap gap-2" role="list">
            {CATEGORY_KEYS.map((cat) => (
              <li
                key={cat.nameKey}
                className="rounded-full px-4 py-2 text-sm border"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-soft)',
                }}
              >
                {t(cat.nameKey)} — {t(cat.descKey)}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-soft)' }}>{t('sampleTitles')}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {GAME_KEYS.map((game) => (
              <Card key={game.titleKey} hover padding="none">
                <div
                  className="aspect-[3/4] flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(145deg, var(--panel-hover) 0%, var(--card-bg) 100%)',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <Gamepad2 className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: 'var(--muted)' }} aria-hidden />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm truncate" style={{ color: 'var(--text)' }}>{t(game.titleKey)}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{t(game.categoryKey)}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm" style={{ color: 'var(--muted)' }}>
          {t('catalogFooter')}
        </p>
      </Container>
    </section>
  )
}
