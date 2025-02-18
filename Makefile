include Make.depend

# Start the application
run:
	export APP_ROOT=$(app_root) && \
	docker compose -f $(compose-config) -p $(project-name) up -d $(service-name)

# Stop the application
stop:
	export APP_ROOT=$(app_root) && \
	docker compose -f $(compose-config) -p $(project-name) stop $(service-name)

# Build the application
build:
	export APP_ROOT=$(app_root) && \
	docker compose -f $(compose-config) -p $(project-name) build $(service-name)

# Clean build (no cache)
clean-build:
	export APP_ROOT=$(app_root) && \
	docker compose -f $(compose-config) -p $(project-name) build --no-cache $(service-name)

# Show running containers
ps:
	export APP_ROOT=$(app_root) && \
	docker compose -f $(compose-config) -p $(project-name) ps

# Watch logs
watch-logs:
	export APP_ROOT=$(app_root) && \
	docker compose -f $(compose-config) -p $(project-name) logs -f $(service-name)

# Execute command in container
exec:
ifdef cmd
	export APP_ROOT=$(app_root) && \
	docker compose -f $(compose-config) -p $(project-name) exec $(service-name) $(cmd)
else
	@echo "ERROR: You must pass a 'cmd' value"
	@echo "  ex: make cmd='your command' exec"
endif

# Lint
.PHONY: lint
lint:
	make exec cmd="$(make_lint)"