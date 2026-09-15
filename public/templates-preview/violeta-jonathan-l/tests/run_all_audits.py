"""Master Automated Audit Runner for PKMKPI violeta-jonathan-l Template.

Orchestrates and executes:
1. tests/test_design_system.py
2. tests/test_landing_page.py
3. tests/test_about_page.py

Returns exit code 0 if 100% PASS across all suites, or non-zero exit code on any failure.
"""

import os
import sys
import time
import subprocess

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

TEST_SUITES = [
    {
        "name": "Design System & Motion Specification Suite (Charity.org)",
        "file": os.path.join(ROOT_DIR, "tests", "test_design_system.py"),
    },
    {
        "name": "Landing Page & Interactive Verification Suite (Drawer, Tabs, A11y)",
        "file": os.path.join(ROOT_DIR, "tests", "test_landing_page.py"),
    },
    {
        "name": "Standalone About Us Page Verification Suite (16 Leaders, A11y, 6-Viewport)",
        "file": os.path.join(ROOT_DIR, "tests", "test_about_page.py"),
    },
]


def run_suite(suite_info: dict) -> bool:
    name = suite_info["name"]
    file_path = suite_info["file"]

    print(f"\n=======================================================================")
    print(f"RUNNING: {name}")
    print(f"FILE:    {file_path}")
    print(f"=======================================================================")

    if not os.path.isfile(file_path):
        print(f"[FAIL] Test file not found: {file_path}")
        return False

    start_time = time.time()
    try:
        proc = subprocess.run(
            [sys.executable, file_path],
            cwd=os.path.dirname(file_path),
            capture_output=True,
            text=True,
            check=False,
        )
        elapsed = time.time() - start_time

        if proc.stdout:
            print(proc.stdout.strip())
        if proc.stderr:
            print(proc.stderr.strip())

        if proc.returncode == 0:
            print(f"--> RESULT: [PASSED] in {elapsed:.2f}s")
            return True
        else:
            print(f"--> RESULT: [FAILED] (exit code {proc.returncode}) in {elapsed:.2f}s")
            return False
    except Exception as e:
        elapsed = time.time() - start_time
        print(f"--> RESULT: [ERROR] {e} in {elapsed:.2f}s")
        return False


def main():
    print("=======================================================================")
    print("      PKMKPI VIOLETA-JONATHAN-L COMPREHENSIVE AUTOMATED AUDIT          ")
    print("=======================================================================")
    total_start = time.time()

    results = []
    for suite in TEST_SUITES:
        passed = run_suite(suite)
        results.append((suite["name"], passed))

    total_elapsed = time.time() - total_start

    print("\n=======================================================================")
    print("                     FINAL AUDIT SUMMARY REPORT                        ")
    print("=======================================================================")
    all_passed = True
    for name, passed in results:
        status_str = "[PASS]" if passed else "[FAIL]"
        print(f"  {status_str} - {name}")
        if not passed:
            all_passed = False

    print(f"\nTotal Execution Time: {total_elapsed:.2f}s")

    if all_passed:
        print(f"\nOVERALL STATUS: 100% PASS - ALL {len(results)} TEST SUITES PASSED VERIFICATION.")
        sys.exit(0)
    else:
        print("\nOVERALL STATUS: AUDIT FAILED - ONE OR MORE TEST SUITES FAILED.")
        sys.exit(1)


if __name__ == "__main__":
    main()
