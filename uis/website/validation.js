(() => {
  const form = document.getElementById("application-form");
  const feedback = document.getElementById("form-feedback");

  if (!(form instanceof HTMLFormElement) || !(feedback instanceof HTMLParagraphElement)) {
    throw new Error("No se encontró el formulario comercial o su región de estado.");
  }

  const rules = [
    {
      id: "company",
      errorId: "company-error",
      validate: (field) =>
        field.value.trim().length >= 2
          ? ""
          : "Introduce el nombre de la empresa (mínimo 2 caracteres).",
    },
    {
      id: "contact-name",
      errorId: "contact-name-error",
      validate: (field) =>
        field.value.trim().length >= 3
          ? ""
          : "Introduce el nombre de contacto (mínimo 3 caracteres).",
    },
    {
      id: "email",
      errorId: "email-error",
      validate: (field) => {
        const email = field.value.trim();

        if (!email) {
          return "Introduce tu email corporativo.";
        }

        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
          ? ""
          : "Introduce un email con formato válido, por ejemplo nombre@empresa.com.";
      },
    },
    {
      id: "phone",
      errorId: "phone-error",
      validate: (field) => {
        const phone = field.value.replace(/[\s().-]/g, "");

        return /^\+[1-9]\d{7,14}$/.test(phone)
          ? ""
          : "Introduce el teléfono en formato internacional, incluido el prefijo (por ejemplo, +34600123456).";
      },
    },
    {
      id: "country",
      errorId: "country-error",
      validate: (field) =>
        field.value.trim() ? "" : "Indica el país de tu empresa.",
    },
    {
      id: "industry",
      errorId: "industry-error",
      validate: (field) =>
        field.value.trim() ? "" : "Indica el sector empresarial.",
    },
    {
      id: "service",
      errorId: "service-error",
      validate: (field) =>
        field.value ? "" : "Selecciona el servicio que necesita tu empresa.",
    },
    {
      id: "employee-count",
      errorId: "employee-count-error",
      validate: (field) => {
        const count = Number(field.value);

        return Number.isInteger(count) && count > 0
          ? ""
          : "Introduce un número entero de empleados mayor que cero.";
      },
    },
    {
      id: "project-needs",
      errorId: "project-needs-error",
      validate: (field) =>
        field.value.trim().length >= 20
          ? ""
          : "Describe las necesidades del proyecto con al menos 20 caracteres.",
    },
    {
      id: "privacy-consent",
      errorId: "privacy-consent-error",
      validate: (field) =>
        field.checked ? "" : "Debes aceptar la política de privacidad para continuar.",
    },
  ];

  const stateClasses = [
    "border-slate-300",
    "focus:border-teal-700",
    "focus:ring-teal-700",
    "border-red-600",
    "focus:border-red-600",
    "focus:ring-red-600",
    "border-emerald-600",
    "focus:border-emerald-600",
    "focus:ring-emerald-600",
  ];

  // Resuelve cada control y su mensaje asociado al cargar la página.
  const fields = rules.map((rule) => {
    const control = document.getElementById(rule.id);
    const error = document.getElementById(rule.errorId);

    if (!(control instanceof HTMLElement) || !(error instanceof HTMLElement)) {
      throw new Error(`Falta el control o el mensaje de validación para "${rule.id}".`);
    }

    return { ...rule, control, error };
  });

  function clearFeedback() {
    feedback.textContent = "";
    feedback.className = "mb-6 hidden rounded-lg border p-4 text-sm";
  }

  // Muestra un mensaje general con los estilos de error o éxito de Tailwind.
  function showFeedback(message, isError) {
    feedback.textContent = message;
    feedback.className = isError
      ? "mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
      : "mb-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800";
  }

  // Actualiza el mensaje, el estado accesible y el color del control.
  function validateField(field) {
    const message = field.validate(field.control);
    const isInvalid = Boolean(message);

    field.control.setAttribute("aria-invalid", String(isInvalid));
    field.error.textContent = message;
    field.error.classList.toggle("hidden", !isInvalid);

    field.control.classList.remove(...stateClasses);
    field.control.classList.add(
      ...(isInvalid
        ? ["border-red-600", "focus:border-red-600", "focus:ring-red-600"]
        : ["border-emerald-600", "focus:border-emerald-600", "focus:ring-emerald-600"]),
    );

    return !isInvalid;
  }

  // Valida al escribir y al salir del campo, dando feedback inmediato.
  fields.forEach((field) => {
    const validateAndClearFeedback = () => {
      clearFeedback();
      validateField(field);
    };

    field.control.addEventListener("input", validateAndClearFeedback);
    field.control.addEventListener("blur", validateAndClearFeedback);
  });

  // Valida todos los campos al enviar e impide una petición real en esta demo.
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearFeedback();

    const allValid = fields.map(validateField).every(Boolean);

    if (!allValid) {
      showFeedback("Revisa los campos indicados antes de enviar la solicitud.", true);
      fields.find((field) => field.control.getAttribute("aria-invalid") === "true")
        ?.control.focus();
      return;
    }

    showFeedback(
      "Validación completada. Simulación de envío: no se ha transmitido información.",
      false,
    );
  });

  // Limpia los mensajes y estilos cuando se restablece el formulario.
  form.addEventListener("reset", () => {
    fields.forEach((field) => {
      field.control.setAttribute("aria-invalid", "false");
      field.error.textContent = "";
      field.error.classList.add("hidden");
      field.control.classList.remove(...stateClasses);
    });

    clearFeedback();
  });
})();
