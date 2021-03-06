import { PartnerUserInput } from '../types/PageUserInputs'
import { parseInputNumber } from './utils'

const PARTNER_MAX_INCOME = 3937.35

export const validatePartnerIncome = (
  values: PartnerUserInput,
  step = null,
): boolean => {
  const step1 = values.partner_spolocna_domacnost === true

  const step2 = values.partner_bonus_uplatneny === false

  const step3 = Object.keys(values.partner_podmienky)
    .map((key) => values.partner_podmienky[key])
    .some((value) => value === true)

  const step4 =
    values.r032_partner_vlastne_prijmy !== '' &&
    parseInputNumber(values.r032_partner_vlastne_prijmy) <= PARTNER_MAX_INCOME

  const steps = [step1, step2, step3, step4]

  if (step !== null) {
    return steps[step - 1] // return value for given step
  }

  return steps.every((value) => value === true) // validate for all steps
}
