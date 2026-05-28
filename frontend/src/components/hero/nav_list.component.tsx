return (
  <header className="sticky top-0 z-50 w-full bg-white/90 supports-[backdrop-filter]:bg-white/75 dark:bg-[#0B1120]/80 dark:supports-[backdrop-filter]:bg-[#0B1120]/70 backdrop-blur-md border-b border-slate-200/70 dark:border-white/10 transition-colors duration-300 transform-gpu">
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
      <div className="flex items-center justify-between w-full gap-2">

<<<<<
              <button
                type="button"
                aria-label="Notifications"
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-all duration-300 hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
                data-notification-trigger="true"
                onClick={toggle}
              >
                <i className="fa-solid fa-bell" />

                {unreadCount > 0 && (
                  <span className="absolute right-0 top-0 grid min-h-[18px] min-w-[18px] -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-rose-500 px-1 text-[11px] font-semibold text-white">
                    {unreadCount > 9 ? "9+" : unreadCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex xl:hidden items-center gap-1.5">
            <ThemeToggle />

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}

            </button>
          </div>
        </div>
      </div>

      <NotificationComponent
        notifications={notifications}
        showNotification={isOpen}
        setShowNotification={close}
        unreadCount={unreadCount}
        onMarkAsRead={markAsRead}
      />

